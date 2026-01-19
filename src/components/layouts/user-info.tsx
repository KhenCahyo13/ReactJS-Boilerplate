import { useSidebar } from "@/components/ui/sidebar";

const UserInfo = () => {
    const { open } = useSidebar();

    return (
        <div className="flex items-center gap-x-3 mt-2 pl-1">
            <img
                src="https://i.pravatar.cc/150?u=fake@pravatar.com"
                alt="User Avatar"
                className="w-10 rounded-lg"
            />
            {open && (
                <div className="flex flex-col gap-y-0.5">
                    <span className="font-medium text-sm">Khen Cahyo</span>
                    <span className="text-xs text-muted-foreground">
                        khencahyo02@gmail.com
                    </span>
                </div>
            )}
        </div>
    );
};

export default UserInfo;
