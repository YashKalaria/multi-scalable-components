import Accordion from "../components/Accordion";

export default function AccordionPage() {
  const items = [
    {
      id: "001",
      label: "Can I use React on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want You can use React on any project you want.",
    },
    {
      id: "002",
      label: "Can I use JavaScript on a project?",
      content:
        "You can use JavaScript on any project you want. You can use JavaScript on any project you want. You can use JavaScript on any project you want.",
    },
    {
      id: "003",
      label: "Can I use CSS on a project?",
      content:
        "You can't use CSS on any project. You can't use CSS on any project. You can't use CSS on any project.",
    },
  ];
  return (
    <>
      <Accordion items={items} />
    </>
  );
}
