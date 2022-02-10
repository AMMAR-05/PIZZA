import Link from "next/link";
function Button({content}) {
    return (
      <button className={`border-2 rounded p-2 bg-red-600 text-white hover:bg-gray-200 hover:text-black`}>
        <Link href="/">{content}</Link>
      </button>
       
    )
}

export default Button
