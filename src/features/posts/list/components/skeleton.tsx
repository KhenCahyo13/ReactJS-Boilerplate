import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const PostsDataOverviewSkeleton = () => (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
            <Card key={index}>
                <CardContent>
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-9 w-16 mt-2 mb-4" />
                    <Skeleton className="h-4 w-32" />
                </CardContent>
            </Card>
        ))}
    </div>
);