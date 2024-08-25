import {ScrollArea} from "@/components/ui/scroll-area.jsx";
import {Avatar, AvatarFallback} from "@/components/ui/avatar.jsx";
import {Badge} from "@/components/ui/badge.jsx";
import {Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger} from "@/components/ui/dialog.jsx";
import {Button} from "@/components/ui/button.jsx";
import {PlusIcon} from "@radix-ui/react-icons";
import InviteUserForm from "@/pages/ProjectDetail/InviteUserForm.jsx";
import IssueList from "@/pages/ProjectDetail/IssueList.jsx";
import ChatBox from "@/pages/ProjectDetail/ChatBox.jsx";

const ProjectDetail = () => {
    const handleProjectInvitation = () => {

    }
    return (
        <>

            <div className="mt-5 lg:px-10">
                <div className="lg:flex gap-5 justify-between pb-4">
                    <ScrollArea className="h-screen lg:w[69%] pr-2">
                        <div className="text-gray-400 pb-10 w-full">
                            <h1 className="text-lg font-semibold pb-5">Create Ecommerce Website using Reactjs</h1>
                            <div className="space-y-5 pb-10 text-sm">
                                <p className="w-full md:max-w-lg lg:max-w-xl">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <div className="flex">
                                    <p className="w-36">Project Lead:</p>
                                    <p>Khoa</p>
                                </div>
                                <div className="flex">
                                    <p className="w-36">Members:</p>
                                    <div className="flex items-center gap-2">
                                        {[1, 1, 1, 1].map((item) => <Avatar className="cursor-pointer" key={item}>
                                            <AvatarFallback>K</AvatarFallback>
                                        </Avatar>)}
                                    </div>
                                    <Dialog>
                                        <DialogTrigger>
                                            {/*<DialogClose>*/}
                                                <Button size="sm" variant="outline" onClick={handleProjectInvitation} className="ml-2">
                                                    <span>invite</span>
                                                    <PlusIcon className="w-3 h-3"></PlusIcon>
                                                </Button>
                                            {/*</DialogClose>*/}
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>Invite User</DialogHeader>
                                            <InviteUserForm/>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                                <div className="flex">
                                    <p className="w-36">Category:</p>
                                    <p>Fullstack</p>
                                </div>

                                <div className="flex">
                                    <p className="w-36">Status:</p>
                                    <Badge>In Progress</Badge>
                                </div>
                            </div>
                            <section>
                                <p className="py-5 border-b text-lg -tracking-wider">Tasks</p>
                                <div className="lg:flex md:fflex gap-3 justify-between py-5">
                                    <IssueList status="pending" title="Todo List"/>
                                    <IssueList status="in_progress" title="In Progress"/>
                                    <IssueList status="done" title="Done"/>
                                </div>
                            </section>
                        </div>
                    </ScrollArea>
                    <div className="lg:w-[30%] rounded-md sticky right-5 top-10">
                        <ChatBox/>
                    </div>
                </div>

            </div>

        </>
    );
};

export default ProjectDetail;