export function StudentCard({ student }) {
  return (
    <div className="flex justify-between items-center bg-white shadow sm:rounded-lg px-10 py-5 sm:px-20">
      <div className="">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {student.name}
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">{student.email}</p>
      </div>

      <div className="w-40">
        <h3 className="text-lg leading-6 font-medium text-gray-900 text-left">
          Course:-
        </h3>
        <p className="mt-1 text-sm text-gray-500 text-left">{student.course}</p>
      </div>
    </div>
  );
}
