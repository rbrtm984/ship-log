import React from 'react';
import { useState } from "react";

export default function Form({ onFormData }) {
    const [projectName, setProjectName] = useState('');
    const [hoursWorked, setHoursWorked] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(projectName, hoursWorked, date);
        onFormData({ projectName, hoursWorked, date });
        // Reset form
        setProjectName('');
        setHoursWorked('');
        setDate('');
    }

    return (
    <form className="space-y-12 sm:space-y-16" onSubmit={handleSubmit}>
        <div>
        <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
        <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:py-6">
            <label htmlFor="project-name" className="block text-sm font-medium leading-6 text-white sm:pt-1.5">
                Project Name
            </label>
            <input
                type="text"
                name="project-name"
                id="project-name"
                autoComplete="given-name"
                value={projectName}
                onChange={e => setProjectName(e.target.value)}
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:col-span-2 sm:mt-0 sm:max-w-xs sm:text-sm sm:leading-6"
            />
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:py-6">
            <label htmlFor="hours-worked" className="block text-sm font-medium leading-6 text-white sm:pt-1.5">
                Hours Worked
            </label>
            <input
                type="text"
                name="hours-worked"
                id="hours-worked"
                autoComplete="family-name"
                value={hoursWorked}
                onChange={e => setHoursWorked(e.target.value)}
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:col-span-2 sm:mt-0 sm:max-w-xs sm:text-sm sm:leading-6"
            />
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:py-6">
            <label htmlFor="date" className="block text-sm font-medium leading-6 text-white sm:pt-1.5">
                Date
            </label>
            <input
                id="date"
                name="date"
                type="date"
                autoComplete="email"
                value={date}
                onChange={e => setDate(e.target.value)}
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:col-span-2 sm:mt-0 sm:max-w-md sm:text-sm sm:leading-6"
            />
            </div>
        </div>
        </div>
        <div className="flex justify-end">
        <button
            type="submit"
            className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            Save
        </button>
        </div>
    </form>
    );
}
