import { memo } from "react";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

const PostsDataOverview = () => (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card>
            <CardContent>
                <CardTitle className="text-muted-foreground font-medium">Total Posts</CardTitle>
                <p className="text-3xl font-semibold mt-2 mb-4">15</p>
                <CardDescription>Number of posts in total.</CardDescription>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                <CardTitle className="text-muted-foreground font-medium">Published Posts</CardTitle>
                <p className="text-3xl font-semibold mt-2 mb-4">10</p>
                <CardDescription>Number of posts that are live on the site.</CardDescription>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                <CardTitle className="text-muted-foreground font-medium">Unpublished Posts</CardTitle>
                <p className="text-3xl font-semibold mt-2 mb-4">10</p>
                <CardDescription>Number of posts that are not live on the site.</CardDescription>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                <CardTitle className="text-muted-foreground font-medium">Draft Posts</CardTitle>
                <p className="text-3xl font-semibold mt-2 mb-4">10</p>
                <CardDescription>Number of posts that are drafts and not yet published.</CardDescription>
            </CardContent>
        </Card>
    </div>
);

export default memo(PostsDataOverview);