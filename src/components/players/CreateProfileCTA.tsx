import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CreateProfileCTA = () => {
  return (
    <div className="bg-white rounded-lg p-8 text-center mt-8">
      <h2 className="text-2xl font-bold mb-2">
        Share your player story
      </h2>
      <p className="text-gray-600 mb-4">Create your Player Profile today.</p>
      <Button asChild>
        <Link to="/get-started">Get Started</Link>
      </Button>
    </div>
  );
};

export default CreateProfileCTA;