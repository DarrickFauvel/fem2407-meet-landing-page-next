import Button from "@/components/logo/button";

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center gap-6 px-6 pt-12 lg:w-full lg:px-0">
      <h1 className="max-w-[12ch] text-balance text-center text-fem-fluid-h1 font-black leading-none text-fem-space-cadet">
        Group Chat for Everyone
      </h1>

      <p className="max-w-[45ch] text-center text-fem-fluid-body font-medium leading-fem-fluid-body text-fem-cool-gray sm:max-w-[54ch] lg:max-w-[540px]">
        Meet makes it easy to connect with others face-to-face virtually and
        collaborate across any device.
      </p>

      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Button url="#" bgColor="green">
          Download <span className="text-fem-non-photo-blue">v1.3</span>
        </Button>

        <Button url="#" bgColor="purple">
          What is it?
        </Button>
      </div>
    </div>
  );
};
export default CallToAction;
