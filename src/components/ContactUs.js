import React from 'react'

function ContactUs() {
    return (
        <>
            <section class="bg-[#F2F3F3] py-20 lg:py-[50px] overflow-hidden relative z-10 mt-0">
                <div class="container mx-auto pl-20">
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full lg:w-1/2 xl:w-6/12 px-4">
                            <div class="max-w-[570px] mb-12 lg:mb-0">
                                <span class="block mb-4 text-2xl text-darkblue font-semibold">
                                    Contact Us
                                </span>
                                <h2
                                    class="
                  text-darkblue
                  mb-6
                  uppercase
                  font-bold
                  text-[32px]
                  sm:text-[40px]
                  lg:text-[36px]
                  xl:text-[40px]
                  "
                                >
                                    GET IN TOUCH WITH US
                                </h2>
                                <p class="text-base text-body-color leading-relaxed mb-9">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                    adiqua minim veniam quis nostrud exercitation ullamco
                                </p>

                            </div>
                        </div>
                        <div class="w-full lg:w-1/2 xl:w-5/12 px-4">
                            <div class="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
                                <form>
                                    <div class="mb-6">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                                        />
                                    </div>
                                    <div class="mb-6">
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                                        />
                                    </div>
                                    <div class="mb-6">
                                        <input
                                            type="text"
                                            placeholder="Your Phone"
                                            class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                                        />
                                    </div>
                                    <div class="mb-6">
                                        <textarea
                                            rows="6"
                                            placeholder="Your Message"
                                            class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                                        ></textarea>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            class="
                        w-full
                        text-white
                        bg-darkblue
                        rounded
                        border border-primary
                        p-3
                        transition
                        hover:bg-opacity-90
                        "
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                                <div>
                                    <span class="absolute -top-10 -right-9 z-[-1]">
                                    </span>
                                    <span class="absolute -right-10 top-[90px] z-[-1]">
                                        <svg
                                            width="34"
                                            height="134"
                                            viewBox="0 0 34 134"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                        </svg>
                                    </span>
                                    <span class="absolute -left-7 -bottom-7 z-[-1]">
                                        <svg
                                            width="107"
                                            height="134"
                                            viewBox="0 0 107 134"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs