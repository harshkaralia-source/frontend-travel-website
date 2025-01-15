import Image from "next/image";

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
    full?: boolean;
}

const Button = ({ title, icon, variant, full }: ButtonProps) => {
    return (
        <button
            type="button"
            className={`${variant} ${full && 'w-full py-3.5 '} flex items-center gap-2 rounded-full px-5 py-3`}>
            {icon && <Image
                src={icon}
                width={21}
                height={21} alt="" />}
            <label htmlFor="" className="whitespace-nowrap cursor-pointer">{title}</label>
        </button>
    )
}

export default Button
