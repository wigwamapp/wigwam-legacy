import { FC, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ethers } from "ethers";
import { useQuery } from "react-query";
import classNamed from "lib/classnamed";
import { walletStateQuery } from "app/queries";
import PageLayout from "app/components/layout/PageLayout";
import { ReactComponent as BoxIcon } from "app/icons/box.svg";

const Main: FC = () => (
  <PageLayout>
    <div className="py-8">
      <h1 className="text-4xl font-bold text-brand-primary">Hello!</h1>
      <BoxIcon className="stroke-current h-6 w-auto" />
      <MyListbox />
      <Kek />
      <NumberWrapper padding>
        {ethers.utils.formatUnits(ethers.BigNumber.from("10000000"))}
      </NumberWrapper>
    </div>
  </PageLayout>
);

type NumberWrapperProps = {
  padding: boolean;
};

const NumberWrapper = classNamed("div")<NumberWrapperProps>`
  my-4
  ${(p) => p.padding && "p-[2rem]"}
  text-xl
  bg-gray-900
  dark:hover:bg-opacity-50
`;

const Kek: FC = () => {
  const walletState = useQuery(walletStateQuery).data!;
  console.info(walletState);

  return null;
};

export default Main;

const people = [
  "Wade Cooper",
  "Arlene Mccoy",
  "Devon Webb",
  "Tom Cook",
  "Tanya Fox",
  "Hellen Schmidt",
  "Caroline Schultz",
  "Mason Heaney",
  "Claudie Smitham",
  "Emil Schaefer",
];

const MyListbox: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <div className="py-12">
      <div className="w-full max-w-xs">
        <Listbox
          as="div"
          className="space-y-1"
          value={selectedPerson}
          onChange={setSelectedPerson}
        >
          {({ open }) => (
            <>
              <Listbox.Label className="block text-sm leading-5 font-medium">
                Assigned to
              </Listbox.Label>
              <div className="relative">
                <span className="inline-block w-full rounded-md shadow-sm">
                  <Listbox.Button className="cursor-default relative w-full rounded-md border border-gray-300 pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-brand-primary transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                    <span className="block truncate">{selectedPerson}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Listbox.Button>
                </span>

                <Transition
                  show={open}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  className="absolute mt-1 w-full rounded-md bg-white dark:bg-brand-darkover shadow-lg"
                >
                  <Listbox.Options
                    static
                    className="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
                  >
                    {people.map((person) => (
                      <Listbox.Option key={person} value={person}>
                        {({ selected, active }) => (
                          <div
                            className={`${
                              active
                                ? "text-white bg-blue-600"
                                : "text-brand-darktext dark:text-white"
                            } cursor-default select-none relative py-2 pl-8 pr-4`}
                          >
                            <span
                              className={`${
                                selected ? "font-semibold" : "font-normal"
                              } block truncate`}
                            >
                              {person}
                            </span>
                            {selected && (
                              <span
                                className={`${
                                  active ? "text-white" : "text-blue-600"
                                } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                              >
                                <svg
                                  className="h-5 w-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            )}
                          </div>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </div>
    </div>
  );
};
