import {useForm} from "react-hook-form";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Avatar, AvatarFallback} from "@/components/ui/avatar.jsx";

const CreateCommentForm = ({issueId}) => {
    const form = useForm({
        defaultValues: {
            content: ""
        }
    });

    const onSubmit = (data) => {
        console.log("create project", data);
    }
    return (
        <div>
            <Form {...form}>
                <form className="flex gap-2" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control}
                               name="content"
                               render={({field}) => <FormItem>
                                   <div className="flex gap-2">
                                       <div>
                                           <Avatar>
                                               <AvatarFallback>K</AvatarFallback>
                                           </Avatar>
                                       </div>
                                       <FormControl>
                                           <Input {...field}
                                                  type="text"
                                                  placeholder="add comment here..."
                                                  className="w-[20rem]"
                                           />
                                       </FormControl>
                                   </div>
                                   <FormMessage/>
                               </FormItem>}
                    />
                    <Button type="submit">
                        Save
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default CreateCommentForm;