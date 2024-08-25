import {Card} from "@/components/ui/card";
import {DotFilledIcon, DotsVerticalIcon} from "@radix-ui/react-icons";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Badge} from "@/components/ui/badge.jsx";


function ProjectCard() {
    return (
        <Card className="p-5 w-full lg:max-w-3x1">
            <div className="space-y-5">
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-5">
                            <h1 className="cursor-pointer font-bold text-lg">
                                Create Ecommerce Website
                            </h1>
                            <DotFilledIcon/>
                            <p className="text-sm text-gray-400">fullstack</p>
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Button className="rounded-full" variant="ghost" size="icon">
                                    <DotsVerticalIcon/>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    Update
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Delete
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <p className="text-gray-500 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex flex-wrap gap-2 items-center">
                    {[1, 1, 1, 1].map((item) => <Badge key={item} variant="outline">{"frontend"}</Badge>)}
                </div>
            </div>
        </Card>
    )
}

export default ProjectCard