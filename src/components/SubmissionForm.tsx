import { supabase } from "@/supabase-client";
import { useState } from "react";

const SubmissionForm = () => {
  const [title, setTitle] = useState("");
  const [distribution, setDistribution] = useState("");
  const [description, setDescription] = useState("");
  //   const [images, setImages] = useState([]);
  //   const [tags, setTags] = useState([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error, data } = await supabase
      .from("rice-info")
      .insert([
        {
          title,
          distribution,
          description,
          // images,
          // tags,
        },
      ])
      .select()
      .single();

    console.log({ data, error });
    setTitle("");
    setDescription("");
    setDistribution("");

    if (error) console.error(error);
    else alert("Post submitted!");
  };

  return (
    <form className="border" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        value={distribution}
        onChange={(e) => setDistribution(e.target.value)}
        placeholder="Distro"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description (optional)"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SubmissionForm;
