"use strict";

import { ShowReviewSection } from "@/components/features/shows/ShowReviewSection/ShowReviewSection";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";

export default function SingleShowPage() {
  return (
    <>
      {/* <AuthRedirect to="/login" condition="loggedOut" /> */}
      <ShowReviewSection />
    </>
  );
}
