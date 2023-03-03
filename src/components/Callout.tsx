import React from 'react'

export default function Callout() {
  return (
    <div className="fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
      <div className="flex items-center justify-between gap-x-6 bg-gray-900 py-2.5 px-6 sm:rounded-xl sm:py-3 sm:pr-3.5 sm:pl-4">
        <p className="text-sm leading-6 text-white">
          <span>
            <strong className="font-semibold">2023</strong>
            <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
              <circle cx={1} cy={1} r={1} />
            </svg>
            Coding After Thirty
          </span>
        </p>
      </div>
    </div>
  )
}
