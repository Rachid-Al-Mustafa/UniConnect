import Notification from "./../Notification"

const index = () => {
    return (
        <div
            className="notifications absolute bg-white top-14 right-[0] w-full min-h-[350px] max-h-[300px] overflow-scroll scrollbar-hide min-w-[650px] max-w-[650px] rounded-md p-2 flex flex-col gap-3 z-[999] shadow-lg">
            <div className="flex flex-col gap-3">
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
            </div>
        </div>
    );
}

export default index