import React from "react";
import { ProfileImage } from "../ProfileImage";
import { Input } from "@/components/Input";
import useDesktopProfilePage from "./useDesktopProfilePage";
import XIcon from "@/svgs/XIcon";
import { Button } from "@/components/Button";

const DesktopProfilePage: React.FC = () => {
  const {
    registerUsername,
    handleSubmitUsername,
    onSubmitUsername,
    t3,
    t,
    t2,
    onSubmitPassword,
    errorsPassword,
    handleSubmitPassword,
    registerPassword,
    passwordValue,
    usernameValue,
    user,
    setActiveEdit,
    activeEdit,
  } = useDesktopProfilePage();

  return (
    <div className="">
      <div className="flex flex-col gap-10  mr-36">
        <h2 className="ml-8 text-2xl font-medium">My profile</h2>
        <div className="w-full max-w-[68rem] bg-darkerBlue mt-20 rounded-xl relative">
          <div className="absolute -top-[6.5rem] left-1/2 -translate-x-1/2 z-30 ">
            <ProfileImage />
          </div>
          <div className="pb-16">
            <div className="mt-[12rem] lg:mx-24 xl:mx-40">
              <div className="max-w-[40rem] mx-auto">
                <div
                  className={`flex transition-all duration-300 flex-col ${
                    activeEdit === "username" ? "gap-10" : "gap-5"
                  }`}
                >
                  <div className="flex">
                    <div className="w-full relative">
                      <Input value={user?.name}>Username</Input>
                      {activeEdit === "username" ? (
                        <div
                          onClick={() => setActiveEdit(null)}
                          className="absolute -right-12 bottom-[0.37rem] cursor-pointer"
                        >
                          <XIcon />
                        </div>
                      ) : (
                        <h3
                          onClick={() => setActiveEdit("username")}
                          className="text-white2 text-xl absolute -right-14 bottom-[0.37rem] cursor-pointer"
                        >
                          Edit
                        </h3>
                      )}
                    </div>
                  </div>
                  <div
                    className={`${
                      activeEdit === "username" ? "h-[15.5rem]" : "h-0"
                    } relative overflow-hidden transition-all duration-700`}
                  >
                    <div
                      className="border border-[#CED4DA33] rounded-[0.25rem]
                        px-5 py-6"
                    >
                      <h4>Passwords should contain:</h4>
                      <ul className="flex flex-col gap-1 mt-3">
                        <li className="flex items-center gap-2">
                          <div
                            className={`w-1 h-1 rounded-full ${
                              usernameValue?.length <= 0
                                ? "bg-gray2"
                                : usernameValue?.length < 3
                                ? "bg-red"
                                : "bg-green"
                            }`}
                          ></div>
                          <p
                            className={`${
                              usernameValue?.length <= 0
                                ? "text-gray2"
                                : usernameValue?.length < 3
                                ? "text-red"
                                : "text-white"
                            } text-sm text-gray2`}
                          >
                            3 or more characters
                          </p>
                        </li>
                        <li className="flex items-center gap-2">
                          <div
                            className={`w-1 h-1 rounded-full ${
                              usernameValue?.length <= 0
                                ? "bg-gray2"
                                : usernameValue?.length <= 15
                                ? "bg-green"
                                : "bg-red"
                            } `}
                          ></div>
                          <p
                            className={`text-sm  ${
                              usernameValue?.length <= 0
                                ? "text-gray2"
                                : usernameValue?.length <= 15
                                ? "text-white"
                                : "text-red"
                            }`}
                          >
                            Lower or equal of 15 characters
                          </p>
                        </li>
                        <li className="flex items-center gap-2">
                          <div
                            className={`w-1 h-1 rounded-full ${
                              usernameValue?.length <= 0
                                ? "bg-gray2"
                                : usernameValue === usernameValue?.toLowerCase()
                                ? "bg-green"
                                : "bg-red"
                            } `}
                          ></div>
                          <p
                            className={`text-sm  ${
                              usernameValue?.length === 0
                                ? "text-gray2"
                                : usernameValue === usernameValue?.toLowerCase()
                                ? "text-white"
                                : "text-red"
                            }`}
                          >
                            Only lowercase letters and numbers
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-4">
                      <form
                        id="formUsername"
                        onSubmit={handleSubmitUsername(onSubmitUsername)}
                        className=""
                      >
                        <Input
                          placeholder="New Username"
                          {...registerUsername("name", {
                            required: t("name_label") + " " + t3("required"),
                            minLength: {
                              value: 3,
                              message: t3("min_length") + "3.",
                            },
                            maxLength: {
                              value: 15,
                              message: t3("max_length") + "15.",
                            },
                            pattern: {
                              value: /^[a-z0-9]+$/,
                              message: t3("only_lower_case"),
                            },
                          })}
                        >
                          {t("name_label2")}
                        </Input>
                      </form>
                    </div>
                  </div>
                  <div className="flex flex-col gap-10">
                    <Input value={user?.email}>Email</Input>
                    {!user?.google_id && (
                      <div className="flex">
                        <div className="w-full relative">
                          <Input type="password" value={"••••••••••••"}>
                            Password
                          </Input>
                          {activeEdit === "password" ? (
                            <div
                              onClick={() => setActiveEdit(null)}
                              className="absolute -right-12 bottom-[0.37rem] cursor-pointer"
                            >
                              <XIcon />
                            </div>
                          ) : (
                            <h3
                              onClick={() => setActiveEdit("password")}
                              className="text-white2 text-xl absolute -right-14 bottom-[0.37rem] cursor-pointer"
                            >
                              Edit
                            </h3>
                          )}
                        </div>
                      </div>
                    )}
                    <div
                      className={`${
                        activeEdit === "password" ? "h-[23rem]" : "h-0"
                      } relative overflow-hidden transition-all duration-700`}
                    >
                      <div
                        className="border border-[#CED4DA33] rounded-[0.25rem]
                        px-5 py-6"
                      >
                        <h4>Passwords should contain:</h4>
                        <ul className="flex flex-col gap-1 mt-3">
                          <li className="flex items-center gap-2">
                            <div
                              className={`w-1 h-1 rounded-full ${
                                passwordValue?.length <= 0
                                  ? "bg-gray2"
                                  : passwordValue?.length < 8
                                  ? "bg-red"
                                  : "bg-green"
                              }`}
                            ></div>
                            <p
                              className={`${
                                passwordValue?.length <= 0
                                  ? "text-gray2"
                                  : passwordValue?.length < 8
                                  ? "text-red"
                                  : "text-white"
                              } text-sm text-gray2`}
                            >
                              8 or more characters
                            </p>
                          </li>
                          <li className="flex items-center gap-2">
                            <div
                              className={`w-1 h-1 rounded-full ${
                                passwordValue?.length <= 0
                                  ? "bg-gray2"
                                  : passwordValue?.length <= 15
                                  ? "bg-green"
                                  : "bg-red"
                              } `}
                            ></div>
                            <p
                              className={`text-sm  ${
                                passwordValue?.length <= 0
                                  ? "text-gray2"
                                  : passwordValue?.length <= 15
                                  ? "text-white"
                                  : "text-red"
                              }`}
                            >
                              Lower or equal of 15 characters
                            </p>
                          </li>
                        </ul>
                      </div>
                      <form
                        id="formPassword"
                        onSubmit={handleSubmitPassword(onSubmitPassword)}
                        className="flex flex-col gap-10 mt-5"
                      >
                        <input
                          type="text"
                          name="username"
                          autoComplete="username"
                          hidden
                        />
                        <Input
                          type="password"
                          {...registerPassword("password", {
                            required:
                              t2("password_label") + " " + t3("required"),
                            minLength: {
                              value: 8,
                              message: t3("min_length") + "8.",
                            },
                            maxLength: {
                              value: 15,
                              message: t3("max_length") + "15.",
                            },
                          })}
                          autoComplete="new-password"
                        >
                          {t2("new_password_label")}
                        </Input>
                        <Input
                          type="password"
                          error={errorsPassword?.password_confirmation?.message}
                          {...registerPassword("password_confirmation", {
                            validate: (value) =>
                              value === passwordValue ||
                              t3("password_not_match"),
                          })}
                        >
                          {t2("confirm_new_password_label")}
                        </Input>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            activeEdit !== null
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          } self-end text-xl flex items-center gap-7 transition-all duration-300
          w-full max-w-[68rem] mr-auto`}
        >
          <div className="w-full"></div>
          <button
            onClick={() => setActiveEdit(null)}
            className="hover:opacity-80 transition-all duration-200"
          >
            Cancell
          </button>
          <Button
            form={
              activeEdit === "username"
                ? "formUsername"
                : activeEdit === "password"
                ? "formPassword"
                : null
            }
            type="submit"
            clickFn={() => {}}
            size="medium"
            color="red"
            additionalClasses="text-nowrap"
          >
            Save changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DesktopProfilePage;
