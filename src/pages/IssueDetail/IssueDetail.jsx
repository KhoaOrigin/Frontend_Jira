import {useParams} from "react-router-dom";
import {ScrollArea} from "@/components/ui/scroll-area.jsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.jsx";
import CreateCommentForm from "@/pages/IssueDetail/CreateCommentForm.jsx";
import CommentCard from "@/pages/IssueDetail/CommentCard.jsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";
import {Avatar, AvatarFallback} from "@/components/ui/avatar.jsx";
import {Badge} from "@/components/ui/badge.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getIssueById, updateIssueStatus} from "@/Redux/Issue/Action.js";
import {getComment} from "@/Redux/Comment/Action.js";

const IssueDetail = () => {
    const {projectId, issueId} = useParams();
    const {issue, comment} = useSelector(store => store);
    const dispatch = useDispatch();
    const handleUpdateIssueStatus = (status) => {
        dispatch(updateIssueStatus(issueId, status));
        console.log(status);
    }

    useEffect(() => {
        dispatch((getIssueById(issueId)))
        dispatch(getComment(issueId))
    }, [issueId])
    return (
        <div className="px-20 py-8 text-gray-400">
            <div className="flex justify-between border p-10 rounded-lg">
                <ScrollArea className="h-[80vh] w-[60%]">
                    <div>
                        <h1 className="text-lg font-semibold text-gray-400">{issue.issueDetail?.title}</h1>
                        <div className="py-5">
                            <h2 className="font-semibold text-gray-400">Description</h2>
                            <p className="text-gray-400 text-sm mt-3">
                                {issue.issueDetail?.description}
                            </p>
                        </div>
                        <div className="mt-5">
                            <h1 className="pb-3">Activity</h1>
                            <Tabs defaultValue="comments" className="w-[400px]">
                                <TabsList className="mb-5">
                                    <TabsTrigger value="all">
                                        All
                                    </TabsTrigger>
                                    <TabsTrigger value="comments">
                                        Comments
                                    </TabsTrigger>
                                    <TabsTrigger value="history">
                                        History
                                    </TabsTrigger>
                                </TabsList>
                                <TabsContent value="all">
                                    all Make changes to your account here
                                </TabsContent>
                                <TabsContent value="comments">
                                    <CreateCommentForm issueId={issueId}/>
                                    <div className="mt-8 space-y-6">
                                        {comment.comments.map((item) => (<CommentCard item={item} key={item}/>))}
                                    </div>
                                </TabsContent>
                                <TabsContent value="history">
                                    History change your password here
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </ScrollArea>
                <div className="w-full lg:w-[30%] space-y-2">
                    <Select onValueChange={handleUpdateIssueStatus}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="To Do"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="pending">To Do</SelectItem>
                            <SelectItem value="in_progress">In Progress</SelectItem>
                            <SelectItem value="done">Done</SelectItem>
                        </SelectContent>
                    </Select>
                    <div className="border rounded-lg">
                        <p className="border-b py-3 px-5">Details</p>
                        <div className="p-5">
                            <div className="space-y-7">
                                <div className="flex gap-10 items-center">
                                    <p className="w-[7rem]">Assignee</p>
                                    {issue.issueDetail?.assignee?.fullName ?
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-8 w-8 text-xs">
                                                <AvatarFallback>{issue.issueDetail?.assignee?.fullName[0]}</AvatarFallback>
                                            </Avatar>
                                            <p>{issue.issueDetail?.assignee?.fullName}</p>
                                        </div> : <p>unassigned</p>
                                    }

                                </div>
                                <div className="flex gap-10 items-center">
                                    <p className="w-[7rem]">Labels</p>
                                    <p>None</p>
                                </div>
                                <div className="flex gap-10 items-center">
                                    <p className="w-[7rem]">Status</p>
                                    <Badge>
                                        {issue.issueDetail?.status}
                                    </Badge>
                                </div>
                                <div className="flex gap-10 items-center">
                                    <p className="w-[7rem]">Release</p>
                                    <p>11/11/1111</p>
                                </div>
                                <div className="flex gap-10 items-center">
                                    <p className="w-[7rem]">Reporter</p>
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-8 w-8 text-xs">
                                            <AvatarFallback>K</AvatarFallback>
                                        </Avatar>
                                        <p>Khoa</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default IssueDetail;