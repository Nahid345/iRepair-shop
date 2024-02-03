import { Button } from "@/components/ui/button";
import Container from "@/layouts/Container";
import mackbook from "@/assets/images/macbook-exposed.png";

const HeroSection = () => {
  return (
    <Container className="h-[calc(100vh-64px)] grid grid-cols-2 place-content-center">
      <div>
        <h1 className="text-5xl lg:text-8xl font-bold">
          <span className="text-gray">Don't worry,</span> <br />
          <span> We'll fix it.</span>
        </h1>
        <p className="text-dark-gray max-w-[50ch] mt-10 mb-5 text-lg">
          Welcome to{" "}
          <span className="text-primary-foreground  font-semibold">
            iRepair
          </span>
          , your one-stop place for all kinds of{" "}
          <span className="text-primary-foreground font-semibold">
            Macbook repairs
          </span>{" "}
          and diagnostics.
        </p>
        <Button>Book a service</Button>
      </div>
      <div>
        <img className="-rotate-[30deg]  h-[80%]" src={mackbook} alt="" />
      </div>
    </Container>
  );
};

export default HeroSection;
