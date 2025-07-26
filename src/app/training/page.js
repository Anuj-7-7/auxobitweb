// app/training/page.js
'use client';

import React from 'react';
import Link from 'next/link';

export default function TrainingPage() {
  return (
    <main className="max-w-5xl mx-auto p-8 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold text-gray-800">Master Auxiliary Systems with Expert-Led Training</h1>
        <p className="text-lg text-gray-600 mx-auto max-w-2xl">
          Unlock the full potential of your Auxobit products through hands-on courses led by industry veterans.
        </p>
        <Link href="/training/register">
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Register Now
          </button>
        </Link>
      </section>

      {/* Program Overview */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Program Overview</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 font-medium text-gray-700 border-b">Course Level</th>
                <th className="p-4 font-medium text-gray-700 border-b">Duration</th>
                <th className="p-4 font-medium text-gray-700 border-b">Format</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white hover:bg-gray-50">
                <td className="p-4">Foundations</td>
                <td className="p-4">1 day</td>
                <td className="p-4">Live online / On-site</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="p-4">Professional</td>
                <td className="p-4">2 days</td>
                <td className="p-4">On-site preferred</td>
              </tr>
              <tr className="bg-white hover:bg-gray-50">
                <td className="p-4">Advanced Mastery</td>
                <td className="p-4">3 days</td>
                <td className="p-4">On-site only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Core Modules */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Core Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-blue-600">System Setup & Configuration</h3>
            <p className="text-gray-600">Hardware unpacking, mounting, wiring; initial network configuration; CLI and GUI walkthrough.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-blue-600">Basic Operations & Maintenance</h3>
            <p className="text-gray-600">Routine health checks & logs; firmware updates; troubleshooting common alerts.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-blue-600">Advanced Features & Integration</h3>
            <p className="text-gray-600">UDP/IoT integration; edge-to-cloud workflows; custom scripting & automation.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-blue-600">Security Best Practices</h3>
            <p className="text-gray-600">User roles & access control; network hardening; secure firmware signing.</p>
          </div>
        </div>
      </section>

      {/* Why Train With Us */}
      <section className="bg-gray-50 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Train with Us?</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="mt-1 text-blue-600">•</span>
            <span><strong>Hands-On Labs:</strong> Real-world scenarios guided by experts.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 text-blue-600">•</span>
            <span><strong>Official Certification:</strong> Badge & digital certificate upon completion.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 text-blue-600">•</span>
            <span><strong>Small Class Sizes:</strong> Personalized attention and Q&A.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 text-blue-600">•</span>
            <span><strong>Ongoing Support:</strong> 30-day post-training email hotline.</span>
          </li>
        </ul>
      </section>
    </main>
  );
}
