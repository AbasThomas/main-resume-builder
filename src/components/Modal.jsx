// src/components/FancyModal.jsx
import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';

export default function FancyModal({ isOpen, onClose, title, children }) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-40"
          leave="ease-in duration-200"
          leaveFrom="opacity-40"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm" />
        </Transition.Child>

        {/* Modal panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="scale-75 opacity-0"
            enterTo="scale-100 opacity-100"
            leave="ease-in duration-200"
            leaveFrom="scale-100 opacity-100"
            leaveTo="scale-75 opacity-0"
          >
            <Dialog.Panel className="relative w-full max-w-md rounded-xl bg-[var(--almost-black)] border border-yellow-400 p-6 shadow-xl text-white">
              <div className="absolute top-4 right-4 cursor-pointer" onClick={onClose}>
                <XMarkIcon className="w-6 h-6 text-yellow-400 hover:text-yellow-300 transition" />
              </div>
              <Dialog.Title
                className="text-2xl font-bold text-yellow-300 mb-4 tracking-wide"
                style={{ textShadow: '0 0 6px #fffb3b' }}
              >
                {title}
              </Dialog.Title>
              <div className="text-lg text-gray-300">{children}</div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
