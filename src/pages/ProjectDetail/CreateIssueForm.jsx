import {useForm} from "react-hook-form";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form.jsx";
import {Input} from "@/components/ui/input.jsx";
import {DialogClose} from "@/components/ui/dialog.jsx";
import {Button} from "@/components/ui/button.jsx";
import {useDispatch} from "react-redux";
import {createIssue} from "@/Redux/Issue/Action.js";
import {useParams} from "react-router-dom";

const CreateIssueForm = ({status}) => {
    const {projectId} = useParams();
    const dispatch = useDispatch();
    const form = useForm({
        defaultValues: {
            issueName: "",
            description: "",
            status,
        }
    });

    const onSubmit = (issueData) => {
        issueData.projectId = projectId;
        dispatch(createIssue({title: issueData.issueName, description: issueData.description, projectId: projectId, status: status}));
        console.log("create issue", issueData);
    }
    return (
        <div>
            <Form {...form}>
                <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control}
                               name="issueName"
                               render={({field}) => <FormItem>
                                   <FormControl>
                                       <Input {...field}
                                              type="text"
                                              placeholder="issueName..."
                                              className="border w-full border-gray-700 py-5 px-5"
                                       />
                                   </FormControl>
                                   <FormMessage/>
                               </FormItem>}
                    />
                    <FormField control={form.control}
                               name="description"
                               render={({field}) => <FormItem>
                                   <FormControl>
                                       <Input {...field}
                                              type="text"
                                              placeholder="description..."
                                              className="border w-full border-gray-700 py-5 px-5"
                                       />
                                   </FormControl>
                                   <FormMessage/>
                               </FormItem>}
                    />
                    <DialogClose>
                        <Button type="submit" className="w-fully mt-5">
                            Create Issue
                        </Button>
                    </DialogClose>
                </form>
            </Form>
        </div>
    );
};

export default CreateIssueForm;