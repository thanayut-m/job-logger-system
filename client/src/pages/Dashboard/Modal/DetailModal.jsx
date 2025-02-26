import TextArea from "../../../components/TextArea"

const DetailModal = () => {
    return (
        <div className="grid grid-row gap-2">
            <div className="grid grid-cols-12 gap-2 text-center">
                <div className="bg-amber-50">1</div>
                <div className="bg-amber-100">1</div>
                <div className="bg-amber-200">1</div>
                <div className="bg-amber-300">1</div>
                <div className="bg-amber-400 ">1</div>
                <div className="bg-amber-500">1</div>
                <div className="bg-amber-600">1</div>
                <div className="bg-amber-700">1</div>
                <div className="bg-amber-800" >1</div>
                <div className="bg-amber-900">1</div>
                <div className="bg-green-500">1</div>
                <div className="bg-green-400">1</div>
            </div>
            <div>
                <TextArea
                    label="Test"
                    placeholder="Test"
                />
            </div>
        </div>
    )
}
export default DetailModal