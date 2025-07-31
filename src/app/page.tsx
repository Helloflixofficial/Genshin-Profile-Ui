"use client";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import CharacterShowcase from "@/components/character-showcase";
import ProfileCard from "@/components/profile-card";
import MenuButton from "@/components/Menu/main";
export default function Page() {
  return (
    <div>
      <main className="min-h-screen bg-gradient-to-br from-amber-900 via-amber-100 to-amber-600 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-6xl bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 rounded-xl shadow-2xl border-4 border-amber-800 flex flex-col md:flex-row relative overflow-hidden">
          {/* Book spine decoration */}
          <div className="hidden md:block absolute -left-8 top-8 bg-gradient-to-b from-yellow-400 to-amber-500 w-6 h-12 rounded-r-lg shadow-lg border border-amber-600"></div>

          {/* Book binding line */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-700 to-amber-900"></div>

          {/* LEFT PAGE – Profile */}

          <ProfileCard className="md:w-[45%]" />

          {/* Book fold/crease */}
          <div className="hidden md:block w-2 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 shadow-inner"></div>

          {/* RIGHT PAGE – Character showcase */}

          <div className="flex-1 p-4 md:p-6 flex flex-col bg-gradient-to-br from-orange-50 to-amber-50">
            <div className="flex gap-2 mb-6">
              <Button
                size="sm"
                className="bg-gradient-to-b from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-amber-900 font-semibold shadow-md border border-amber-700"
                disabled
              >
                Character Showcase
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-amber-800 hover:bg-amber-300 hover:text-amber-900 border-2"
              >
                Namecard
              </Button>
            </div>

            {/* <div className="mt-1 pt-2 flex flex-col gap-4 border-t-2 border-amber-300"></div> */}

            <CharacterShowcase />

            <div className="mt-6 pt-2 flex flex-col gap-4 border-t-2 border-amber-300">
              <div className="flex items-center justify-between">
                <Label htmlFor="details" className="text-amber-800 font-medium">
                  Show Character Details
                </Label>
                <Switch
                  id="details"
                  className="data-[state=checked]:bg-amber-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="constellation"
                  className="text-amber-800 font-medium"
                >
                  Hide Constellation Level
                </Label>
                <Switch
                  id="constellation"
                  className="data-[state=checked]:bg-amber-500"
                />
              </div>
            </div>
          </div>
        </div>
        <MenuButton className=" text-amber-800" />
      </main>
    </div>
  );
}
