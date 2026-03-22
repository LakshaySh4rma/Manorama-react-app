import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  gender: string;
  dateOfBirth: string;
  fatherName: string;
  profession: string;
  bloodGroup: string;
  state: string;
  district: string;
  mobile: string;
  whatsapp: string;
  address: string;
  file?: FileList;
  photo?: FileList;
  amount: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      gender: "Male",
      amount: "250",
    },
  });

  const onSubmit = (data: FormData) => {
    const payload = {
      ...data,
      file: data.file?.[0],
      photo: data.photo?.[0],
    };

    console.log(payload);
  };

  const districts = [
    "Lucknow",
    "Varanasi",
    "Gorakhpur",
    "Kanpur",
    "Prayagraj",
    "Agra",
    "Meerut",
    "Bareilly",
    "Basti",
    "Jhansi",
  ];

  const states = [
    "Uttar Pradesh",
    "Maharashtra",
    "Bihar",
    "Rajasthan",
    "Tamil Nadu",
    "Karnataka",
    "West Bengal",
    "Punjab",
    "Delhi",
    "Kerala",
  ];

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Registration Form
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name + Gender */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-1">Name *</label>

            <input
              type="text"
              placeholder="Name"
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
              {...register("firstName", { required: "First name required" })}
            />

            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-2">Gender *</label>

            <div className="flex gap-6">
              <label className="flex gap-2">
                <input type="radio" value="Male" {...register("gender")} />
                Male
              </label>

              <label className="flex gap-2">
                <input type="radio" value="Female" {...register("gender")} />
                Female
              </label>
            </div>
          </div>
        </div>

        <hr />

        {/* DOB + Father */}

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-1">Date of Birth *</label>

            <input
              type="date"
              className="w-full border rounded-md p-2"
              {...register("dateOfBirth", { required: "DOB required" })}
            />

            {errors.dateOfBirth && (
              <p className="text-red-500 text-sm">
                {errors.dateOfBirth.message}
              </p>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-1">Father Name *</label>

            <input
              className="w-full border rounded-md p-2"
              {...register("fatherName", { required: "Father name required" })}
            />

            {errors.fatherName && (
              <p className="text-red-500 text-sm">
                {errors.fatherName.message}
              </p>
            )}
          </div>
        </div>

        <hr />

        {/* Profession */}

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-1">Profession</label>

            <input
              className="w-full border p-2 rounded-md"
              {...register("profession")}
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Blood Group</label>

            <select
              className="w-full border p-2 rounded-md"
              {...register("bloodGroup")}
            >
              <option value="">Select Blood Group</option>
              <option>A+</option>
              <option>B+</option>
              <option>O+</option>
            </select>
          </div>
        </div>

        <hr />

        {/* State District */}

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-1">State *</label>

            <select
              className="w-full border p-2 rounded-md"
              {...register("state")}
            >
              <option value="">Select State</option>

              {states.map((s, i) => (
                <option key={i}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">District *</label>

            <select
              className="w-full border p-2 rounded-md"
              {...register("district")}
            >
              <option>Select District</option>

              {districts.map((d, i) => (
                <option key={i}>{d}</option>
              ))}
            </select>
          </div>
        </div>

        <hr />

        {/* Mobile */}

        <div className="grid md:grid-cols-2 gap-6">
          <input
            placeholder="Mobile"
            className="border p-2 rounded-md"
            {...register("mobile")}
          />

          <input
            placeholder="Whatsapp"
            className="border p-2 rounded-md"
            {...register("whatsapp")}
          />
        </div>

        <hr />

        {/* Address */}

        <div>
          <label className="block font-semibold mb-1">Address *</label>

          <textarea
            className="w-full border p-2 rounded-md"
            rows={3}
            {...register("address")}
          />
        </div>

        <hr />

        {/* Files */}

        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="file"
            className="border p-2 rounded-md"
            {...register("file")}
          />

          <input
            type="file"
            className="border p-2 rounded-md"
            {...register("photo")}
          />
        </div>

        <hr />

        {/* Donate */}

        <div className="grid md:grid-cols-2 gap-6 items-center">
          <label className="font-semibold">Donate Amount</label>

          <input
            type="number"
            min={250}
            className="border p-2 rounded-md"
            {...register("amount")}
          />
        </div>

        <hr />

        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition">
            REGISTER
          </button>
        </div>
      </form>
    </div>
  );
}
