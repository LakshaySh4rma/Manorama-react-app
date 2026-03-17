import { consImage } from "../../../../public/constImage";

export default function Receipt() {

const currentDateTime = new Date().toLocaleString();

return (

<div className="max-w-3xl mx-auto mt-10 print:mt-0 print:p-0 print:max-w-full print:flex print:justify-center">

{/* Receipt */}
<div className="relative bg-gray-100 border-2 border-red-500 rounded-xl shadow-lg p-10
print:shadow-none print:border-black print:bg-white print:w-200">

{/* Watermark */}
<img
src={`${consImage.baseURL}${consImage.logo}`}
className="absolute inset-0 m-auto w-96 opacity-10 pointer-events-none"
/>

{/* Header */}
<div className="text-center mb-8 relative print:hidden">

<h2 className="text-3xl font-semibold text-red-500 print:text-black">
Manorama Charitable Trust
</h2>

<p className="text-gray-600 mt-1">
"A hope for everyone's"
</p>

</div>

{/* Details */}
<div className="relative space-y-4 text-gray-800">

<div className="grid grid-cols-2">
<span className="font-bold">Thank You For Donation To:</span>
<span>Sh./Smt./M/S : Panney Lal</span>
</div>

<div className="grid grid-cols-2">
<span className="font-bold">From:</span>
<span>Sh./Smt./M/S : Ankit Shrivastava</span>
</div>

<div className="grid grid-cols-2">
<span className="font-bold">Mobile:</span>
<span>7217657059</span>
</div>

<div className="grid grid-cols-2">
<span className="font-bold">Email:</span>
<span>ankitlala123@gmail.com</span>
</div>

<div className="grid grid-cols-2">
<span className="font-bold">Donated Amount:</span>
<span>₹501</span>
</div>

<div className="grid grid-cols-2">
<span className="font-bold">Date:</span>
<span>23-08-2025</span>
</div>

<div className="grid grid-cols-2">
<span className="font-bold">Transaction ID:</span>
<span>T2508231150599522831270</span>
</div>

<div className="grid grid-cols-2">
<span className="font-bold">Cause For Donation:</span>
<span>MemberShip Charge</span>
</div>

<div className="grid grid-cols-2">
<span className="font-bold">Payment Mode:</span>
<span>UPI</span>
</div>

</div>

{/* Signature */}
<div className="flex justify-between mt-16 relative">

<div className="text-center w-64">
<div className="border-t border-gray-600 mb-2"></div>
<p className="text-gray-700">Donor Signature</p>
</div>

<div className="text-center w-64">
<div className="border-t border-gray-600 mb-2"></div>
<p className="text-gray-700">Authorized Signatory</p>
</div>

</div>

{/* Invoice Note */}
<div className="text-center mt-10 text-gray-600 text-sm">
This is computer generated invoice on {currentDateTime}
</div>

</div>

{/* Print Button */}
<div className="text-center mt-8 print:hidden">

<button
onClick={() => window.print()}
className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition shadow"
>
🖨 Print Receipt
</button>

</div>

</div>

);
}