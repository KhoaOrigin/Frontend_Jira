import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";
// Thay đổi đường dẫn import
import {CardContent} from "@/components/ui/card";
import {
    MagnifyingGlassIcon,
    MixerHorizontalIcon,
} from "@radix-ui/react-icons";
import {ScrollArea} from "@/components/ui/scroll-area";
import {RadioGroup} from "@/components/ui/radio-group";
import {RadioGroupItem} from "@/components/ui/radio-group";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import ProjectCard from "@/pages/Project/ProjectCard";
import {useDispatch, useSelector} from "react-redux";
import {getProject, searchProject} from "@/Redux/Project/Action.js";

export const tags = [
    "all",
    "reactjs",
    "nextjs",
    "spring boot",
    "mysql",
    "mongodb",
    "angular",
    "python",
    "flask",
    "django",
];

const ProjectList = () => {
    const [keyword, setKeyword] = useState("");
    const {project} = useSelector(store => store);
    const dispatch = useDispatch();
    const handleFilterTag = (value) => {
        if (value === "all") {
            dispatch(getProject({}));
        } else {
        dispatch(getProject({tag: value}));
        }
        // console.log("value", section, value);
    };
    const handleFilterCategory = (value) => {
        if (value === "all") {
            dispatch(getProject({}));
        } else {
            dispatch(getProject({category: value}));
        }
        // console.log("value", section, value);
    };
    console.log("project store", project)

    const handleSearchChange = (e) => {
        dispatch(searchProject(keyword));
        setKeyword(e.target.value);
    };


    return (
        <>
            <div className="relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5">
                <section className="filterSection">
                    <Card className="p-5 sticky top-10 ">
                        <div className="flex justify-between lg:w-[20rem]">
                            <p className="text-xl -tracking-wider">filters</p>
                            <Button variant="ghost" size="icon">
                                <MixerHorizontalIcon/>
                            </Button>
                        </div>
                        <CardContent className="mt-5">
                            <ScrollArea className="space-y-7 h-[70vh]">
                                <div>
                                    <h1 className="pb-3 text-gray-400 border-b">Category</h1>
                                    <div className="pt-5">
                                        <RadioGroup
                                            className="space-y-3 pt-5"
                                            defaultValue="all"
                                            onValueChange={(value) =>
                                                handleFilterCategory(value)
                                            }
                                        >
                                            <div className="flex items-center gap-2">
                                                <RadioGroupItem value="all" id="r1"/>
                                                <Label htmlFor="r1">all</Label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <RadioGroupItem value="fullstack" id="r2"/>
                                                <Label htmlFor="r2">fullstack</Label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <RadioGroupItem value="frontend" id="r3"/>
                                                <Label htmlFor="r3">frontend</Label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <RadioGroupItem value="backend" id="r4"/>
                                                <Label htmlFor="r4">backend</Label>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                </div>

                                <div className="pt-9">
                                    <h1 className="pb-3 text-gray-400 border-b">Tag</h1>
                                    <div className="pt-5">
                                        <RadioGroup
                                            className="space-y-3 pt-5"
                                            defaultValue="all"
                                            onValueChange={(value) =>
                                                handleFilterTag(value)
                                            }
                                        >
                                            {tags.map((item) => (
                                                <div key={item} className="flex items-center gap-2">
                                                    <RadioGroupItem value={item} id={`r1-${item}`}/>
                                                    <Label htmlFor={`r1-${item}`}>{item}</Label>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                    </div>
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </section>
                <section className="projectListSection w-full lg:w-[48rem]">
                    <div className="flex gap-2 items-center pb-5 justify-between">
                        <div className="relative p-0 w-full">
                            <Input
                                className="40% px-9"
                                placeholder="search projects"
                                onChange={handleSearchChange}
                            />
                            {/* <MagnifyingGlassIcon className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400"/> */}
                            <MagnifyingGlassIcon className="absolute top-3 left-4"/>
                        </div>
                    </div>
                    <div>
                        <div className="space-y-5 min-h-[74vh]">
                            {keyword
                                ? project.searchProject?.map((item) =>
                                    <ProjectCard item={item} key={item.id}></ProjectCard>
                                )
                                : project.projects?.map((item) => (
                                    <ProjectCard key={item.id} item={item}></ProjectCard>
                                ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ProjectList;
