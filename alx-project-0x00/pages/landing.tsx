import React from 'react';
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-8 space-y-8">
      <h1 className="text-xl font-extralight mb-8">Landing Page</h1>

      { }
      <Card />
      <Card />
      <Card />

      { }
      <h2 className="text-2xl font-semibold mt-10">Button Examples</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        { }
        <Button title="Small Rounded-sm" styles="px-2 py-1 text-sm rounded-sm" />
        <Button title="Small Rounded-md" styles="px-2 py-1 text-sm rounded-md" />
        <Button title="Small Rounded-full" styles="px-2 py-1 text-sm rounded-full" />

        { }
        <Button title="Medium Rounded-sm" styles="rounded-sm" />
        <Button title="Medium Rounded-md" styles="rounded-md" />
        <Button title="Medium Rounded-full" styles="rounded-full" />

        { }
        <Button title="Large Rounded-sm" styles="px-6 py-3 text-lg rounded-sm" />
        <Button title="Large Rounded-md" styles="px-6 py-3 text-lg rounded-md" />
        <Button title="Large Rounded-full" styles="px-6 py-3 text-lg rounded-full" />

        { }
        <Button title="Large Rounded-lg" styles="px-6 py-3 text-lg rounded-lg bg-green-500 hover:bg-green-600" />
      </div>
    </div>
  );
};

export default Landing;