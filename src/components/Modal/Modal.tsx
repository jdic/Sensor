import { Description, Disclosure, DisclosurePanel, Field, Fieldset, Label, Transition, TransitionChild } from '@headlessui/react'
import { XCircleIcon } from '@heroicons/react/16/solid'
import { Fragment } from 'react/jsx-runtime'
import { IModal } from '../../types/IModal'

export const Modal: React.FC<IModal> = ({ open, title, disableCloseButton, onClose, className, description, children }) =>
{
  return (
    <Transition show={open} as={Fragment}>
      <Disclosure
        as='div'
        className='fixed inset-0 overflow-y-auto flex justify-center items-center z-[99] bg-light-background dark:bg-dark-background'
      >
        <TransitionChild
          as={Fragment}
          enter='ease-out duration-200'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-150'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <DisclosurePanel className={`py-2 px-3 rounded-md bg-light-secondary dark:bg-dark-primary ${className}`} static>
            <Fieldset>
              <Field className='flex justify-between items-center'>
                <Label className='font-semibold'>{title}</Label>
                {!disableCloseButton && (
                  <XCircleIcon
                    aria-label='Close modal'
                    role='button'
                    width={14}
                    onClick={onClose}
                    className='cursor-pointer'
                  />
                )}
              </Field>
              <Field>
                <Description>{description}</Description>
              </Field>
              <Field>
                {children}
              </Field>
            </Fieldset>
          </DisclosurePanel>
        </TransitionChild>
      </Disclosure>
    </Transition>
  )
}
