import * as Sentry from "@sentry/nextjs";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// A faulty API route to test Sentry's error monitoring
export async function GET() {
  try {
    // Deliberately throwing an error to test Sentry
    throw new Error("Sentry Example API Route Error");
  } catch (error) {
    // Capture the error with Sentry
    Sentry.captureException(error);

    // Return a response to the client
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
