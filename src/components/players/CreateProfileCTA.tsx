
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PLAYER_FREE_PLAN_LINK } from "@/constants"

interface CreateProfileCTAProps {
  className?: string;
}

const CreateProfileCTA = ({ className = "" }: CreateProfileCTAProps) => {
  return (
    <Card className={`${className} border-2 border-primary/20`}>
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">Want to join these players?</h3>
        <p className="text-gray-600 mb-6">
          Create your own player profile and showcase your talents to coaches and recruiters.
        </p>
        <Button asChild className="gap-2">
          <a href={PLAYER_FREE_PLAN_LINK} target="_blank" rel="noopener noreferrer">
            Create Your Profile
            <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default CreateProfileCTA;
