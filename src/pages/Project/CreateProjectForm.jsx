import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form.jsx";
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input.jsx";
import {DialogClose} from "@/components/ui/dialog.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";
import {tags} from "@/pages/ProjectList/ProjectList.jsx";
import {Cross1Icon} from "@radix-ui/react-icons";

const CreateProjectForm = () => {
    const handleTagsChange = (newValue) => {
        const currentTags = form.getValues("tags");
        const updatedTags = currentTags.includes(newValue)?
            currentTags.filter(tags => tags !== newValue) : [...currentTags, newValue];
        form.setValue("tags", updatedTags);
    }
    const form = useForm({
        defaultValues: {
            name: "",
            description: "",
            category: "",
            tags: ["javascript", "reactjs"],
        }
    });

    const onSubmit = (data) => {
        console.log("create project", data);
    }

    return (
        <div>
            <Form {...form}>
                <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control}
                               name="name"
                               render={({field}) => <FormItem>
                                   <FormControl>
                                       <Input {...field}
                                              type="text"
                                              placeholder="Project Name..."
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
                                              placeholder="Project description..."
                                              className="border w-full border-gray-700 py-5 px-5"
                                       />
                                   </FormControl>
                                   <FormMessage/>
                               </FormItem>}
                    />
                    <FormField control={form.control}
                               name="category"
                               render={({field}) => <FormItem>
                                   <FormControl>
                                       <Select
                                           defaultValue="fullstack"
                                           value={field.value}
                                           onValueChange={(value) => field.onChange(value)}
                                           // className="border w-full border-gray-700 py-5 px-5"
                                       ><SelectTrigger className="w-full">
                                           <SelectValue placeholder="Category"/>
                                       </SelectTrigger>
                                           <SelectContent>
                                               <SelectItem value="fullstack">Fullstack</SelectItem>
                                               <SelectItem value="frontend">Frontend</SelectItem>
                                               <SelectItem value="backend">Backend</SelectItem>
                                           </SelectContent>
                                       </Select>
                                   </FormControl>
                                   <FormMessage/>
                               </FormItem>}
                    />
                    <FormField control={form.control}
                               name="tags"
                               render={({field}) => (<FormItem>
                                   <FormControl>
                                       <Select
                                           onValueChange={(value) => handleTagsChange(value)}
                                           // className="border w-full border-gray-700 py-5 px-5"
                                       ><SelectTrigger className="w-full">
                                           <SelectValue placeholder="Tags"/>
                                       </SelectTrigger>
                                           <SelectContent>
                                               {tags.map((item) => (<SelectItem key={item} value={item}>{item}</SelectItem>))}
                                           </SelectContent>
                                       </Select>
                                   </FormControl>
                                   <div className="flex gap-1 flex-wrap">
                                       {field.value.map((item)=>
                                       <div key={item} onClick={() =>handleTagsChange(item)} className="cursor-pointer flex rounded-full items-center border gap-2 py-1 px-4">
                                           <span className="text-sm">{item}</span>
                                           <Cross1Icon className="h-3 w-3"/>
                                       </div>)}
                                   </div>
                                   <FormMessage/>
                               </FormItem>)}
                    />
                    <DialogClose>
                        <Button type="submit" className="w-fully mt-5">
                            Create Project
                        </Button>
                    </DialogClose>
                </form>
            </Form>
        </div>
    );
};

export default CreateProjectForm;