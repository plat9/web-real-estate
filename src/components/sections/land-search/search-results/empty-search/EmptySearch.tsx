import EmptySearchIcon from "./EmptySearchIcon";

interface Props {
  onResetSearch: () => void;
  className?: string;
}

const EmptySearch: React.FC<Props> = ({ onResetSearch, className }) => {
  return (
    <div
      className={`flex h-full min-h-[65vh] select-none flex-col items-center justify-center gap-3.5  text-center ${
        className ? className : ""
      }`}
    >
      <EmptySearchIcon />

      <span className="lg:mb-10">
        لم يتم العثور على نتائج مطابقة. <br />
        هل تريد{" "}
        <button
          onClick={onResetSearch}
          className="button-click-animation hover:underline"
        >
          إعادة تعيين الفلاتر؟
        </button>
      </span>
    </div>
  );
};

export default EmptySearch;
