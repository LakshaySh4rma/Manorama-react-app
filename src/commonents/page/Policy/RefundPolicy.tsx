export default function Refund() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-12">
        <h1 className="text-4xl font-bold text-red-600 mb-6 text-center">
          Cancellation & Refund Policy
        </h1>

        <div className="space-y-8">
          <div>
            <p className="text-gray-700 mb-4">
              1. If donor feels that, he/she made an error in donation
              amount/purpose or any other parameter, kindly let the Manorma
              Charitable trust know about such error as early as possible by
              emailing details at contact @manormacharitabletrust.org. We shall
              rectify any such parameter requested by you whenever possible.
            </p>
            <p className="text-gray-700 mb-4">
              2. If you wish to cancel the donation, kindly let us know within
              24 hours. We shall refund your donation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
