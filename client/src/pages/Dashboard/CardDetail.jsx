const CardDetail = () => {

    const row = [
        { id: 1, hospital: 'โรงพยาบาลทดสอบ', status1: 'กำลังดำเนินการ', tat: 12, issueChannel: 'กลุ่มส้ม', problem: 'Canada', dateFound: '12/16/2020', dateResolved: '12/16/2020', responsible: 'ชื่อทดสอบ-นามสกุลทดสอบ', status: 'approve' },
    ]

    const limit = 10;

    return (
        <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-3">
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr>
                                <th>ลำดับ</th>
                                <th>โรงพยาบาล/หน่วยงาน</th>
                                <th>สถานะบริการ</th>
                                <th>ช่องทางปัญหา</th>
                                <th>TAT</th>
                                <th>ปัญหาที่พบ </th>
                                <th>วันที่-เวลาที่พบ </th>
                                <th>วันที่-เวลาแก้ไขแล้วเสร็จ</th>
                                <th>ผู้รับผิดชอบ</th>
                                <th>สถานะ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {row.slice(0, limit).map((row, index) => {
                                return (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{row.hospital}</td>
                                        <td>{row.status1}</td>
                                        <td>{row.issueChannel}</td>
                                        <td>{row.tat}</td>
                                        <td>{row.problem}</td>
                                        <td>{row.dateFound}</td>
                                        <td>{row.dateResolved}</td>
                                        <td>{row.responsible}</td>
                                        <td>{row.status}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default CardDetail