import { Button } from "@/components/ui/button";

const EditorFooter = ({ handleSubmit }) => {
  return (
    <div className="flex items-center justify-center w-full  mr-5">
      <div className="ml-auto flex space-x-4">
        <Button className="px-5 py-1.5 text-sm font-medium transition-all focus:outline-none bg-neutral-800 hover:bg-neutral-700 text-gray-50 rounded-lg">
          Run
        </Button>
        <Button
          className="px-3 py-1.5 font-medium text-sm text-gray-50 bg-green-600 hover:bg-green-700 rounded-lg"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default EditorFooter;
