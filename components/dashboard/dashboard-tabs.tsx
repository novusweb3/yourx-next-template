"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DashboardTabs() {
  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="space-y-4">
        {/* Your overview content */}
      </TabsContent>
      <TabsContent value="analytics" className="space-y-4">
        {/* Your analytics content */}
      </TabsContent>
      <TabsContent value="reports" className="space-y-4">
        {/* Your reports content */}
      </TabsContent>
      <TabsContent value="notifications" className="space-y-4">
        {/* Your notifications content */}
      </TabsContent>
    </Tabs>
  )
} 