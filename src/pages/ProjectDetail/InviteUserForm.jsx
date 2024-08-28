import {useForm} from "react-hook-form";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form.jsx";
import {Input} from "@/components/ui/input.jsx";
import {DialogClose} from "@/components/ui/dialog.jsx";
import {Button} from "@/components/ui/button.jsx";
import {useDispatch} from "react-redux";
import {inviteToProject} from "@/Redux/Project/Action.js";
import {useParams} from "react-router-dom";

const InviteUserForm = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const form = useForm({
        defaultValues: {
            email: ""
        }
    });

    const onSubmit = (data) => {
        dispatch(inviteToProject({ email: data.email, projectId : id}))
        console.log("create project", data);
    }
    return (
        <div>
            <Form {...form}>
                <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control}
                               name="email"
                               render={({field}) => <FormItem>
                                   <FormControl>
                                       <Input {...field}
                                              type="text"
                                              placeholder="user email..."
                                              className="border w-full border-gray-700 py-5 px-5"
                                       />
                                   </FormControl>
                                   <FormMessage/>
                               </FormItem>}
                    />
                    <DialogClose>
                        <Button type="submit" className="w-fully mt-5">
                            Invite User
                        </Button>
                    </DialogClose>
                </form>
            </Form>
        </div>
    );
};

export default InviteUserForm;