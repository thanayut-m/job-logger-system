const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.noteWorkInfo = async (req, res) => {
  try {
    const { todo_receive_date, todo_report_date, searchValue, user_id } =
      req.body;

    const searchQuery = searchValue?.trim() || "";

    const isValidDate = (date) => date && !isNaN(new Date(date).getTime());

    const whereCondition = {
      ...(searchQuery
        ? {
            OR: [
              { todo_order_id: { contains: searchQuery, mode: "insensitive" } },
              { todo_hospital: { contains: searchQuery, mode: "insensitive" } },
              {
                todo_order_status: {
                  contains: searchQuery,
                  mode: "insensitive",
                },
              },
            ],
          }
        : {}),

      ...(isValidDate(todo_receive_date)
        ? { todo_receive_date: { gte: new Date(todo_receive_date) } }
        : {}),

      ...(isValidDate(todo_report_date)
        ? { todo_report_date: { lte: new Date(todo_report_date) } }
        : {}),
    };
    const result = await prisma.todoOrder.findMany({
      where: whereCondition,
    });

    res.status(200).json({
      message: "success",
      result: result,
    });
  } catch (err) {
    console.log("Error :", err);

    res.status(500).json({
      error: "Server Error!",
      details: err?.message || "Something wont wrong.",
    });
  }
};

exports.createNoteWork = async (req, res) => {
    try {
      
  } catch (err) {
    console.log("error : ", err);
    res.status(500).json({
      error: "Server Error!",
      details: err?.message || "Something wont wrong.",
    });
  }
};
