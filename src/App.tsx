/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "./components/layout/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Properties } from "./pages/Properties";
import { Leads } from "./pages/Leads";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="properties" element={<Properties />} />
          <Route path="leads" element={<Leads />} />
          <Route path="*" element={<div className="p-6 text-center text-gray-500">Page not found or under construction</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
