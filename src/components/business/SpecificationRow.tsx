
interface SpecRowProps {
    label: string;
    value: string;
  }
  
  const SpecificationRow = ({ label, value }: SpecRowProps) => (
    <div className="flex justify-between py-2 border-b border-gray-100">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
  
  export default SpecificationRow;
  