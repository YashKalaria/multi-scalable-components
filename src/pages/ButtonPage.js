import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

export default function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary className="mb-5">
          <GoBell />
          Notify
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoCloudDownload />
          Download
        </Button>
      </div>
      <div>
        <Button success rounded outline>
          <GoDatabase />
          Database
        </Button>
      </div>
      <div>
        <Button warning rounded>
          ola
        </Button>
      </div>
      <div>
        <Button danger outline rounded>
          que que
        </Button>
      </div>
    </div>
  );
}
