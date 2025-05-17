import { ButtonProps, TouchableOpacity, Text } from "react-native";

type CustomButtonProps = ButtonProps & {
  bgVariant?: "primary" | "secondary" | "danger" | "success" | "outline";
  title: string;
  textVariant?: string;
  IconLeft?: React.ElementType;
  IconRight?: React.ElementType;
  className?: string;
};

const getBgVariantStyle = (variant: CustomButtonProps["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return "bg-grey-500";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
    case "outline":
      return "border border-gray-500";
    default:
      return "bg-blue-500";
  }
};

const getTextVariantStyle = (variant: CustomButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return "text-black";
    case "secondary":
      return "text-gra-100";
    case "danger":
      return "text-red-100";
    case "success":
      return "text-green-100";
    default:
      return "text-white";
  }
};

const CustomButton = ({
  onPress,
  title,
  bgVariant,
  textVariant,
  className,
  IconLeft,
  IconRight,
  ...props
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full rounded-full p-3 flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${getBgVariantStyle(bgVariant)} ${className}`}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <Text className={`text-lg font-bold ${getTextVariantStyle(textVariant)}`}>
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;
