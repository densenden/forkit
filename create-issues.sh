#!/bin/bash

# Studio Sen – FORK:IT GitHub Issue Creation Script
# This script creates 50 issues organized by milestone

REPO="densenden/forkit"

echo "Creating issues for $REPO..."

# Function to create issues with proper error handling
create_issue() {
  local title="$1"
  local body="$2"
  local milestone="$3"
  
  echo -e "\nCreating issue: $title"
  result=$(gh issue create --repo $REPO --title "$title" --body "$body" --milestone "$milestone" 2>&1)
  
  # Check if we got a URL back, which indicates success
  if [[ $result == https://* ]]; then
    echo "✅ Issue created successfully: $result"
  else
    echo "⚠️ Error creating issue: $result"
  fi
}

echo -e "\n--- Creating Website Enhancement Issues ---"
create_issue "Audit existing website for UX/UI improvements" "Review current layout, spacing, typography, and responsiveness. Suggest improvements." "Website Enhancements"
create_issue "Implement multilingual support" "Add language switcher and support for multiple locales." "Website Enhancements"
create_issue "Optimize site for mobile responsiveness" "Ensure all pages are fully usable and visually correct on mobile devices." "Website Enhancements"
create_issue "Integrate analytics tools" "Add Google Analytics or privacy-first alternatives like Plausible." "Website Enhancements"
create_issue "Set up SEO best practices" "Use metadata, Open Graph tags, and semantic HTML to improve visibility." "Website Enhancements"

echo -e "\n--- Creating Demonstration Projects Issues ---"
create_issue "List all services requiring demo sites" "Identify each service Studio Sen wants to visualize via demo site." "Demonstration Projects"
create_issue "Design wireframes for each demo site" "Create Figma or hand-drawn mockups for key layouts." "Demonstration Projects"
create_issue "Develop front-end templates using Next.js" "Base templates on wireframes with responsive Tailwind layout." "Demonstration Projects"
create_issue "Integrate Medusa.js for e-commerce functionalities" "Hook up product/checkout flow using Medusa's backend." "Demonstration Projects"
create_issue "Deploy demo sites on subdomains" "Use Vercel or similar to host demos like retail.sen.studio etc." "Demonstration Projects"

echo -e "\n--- Creating Contributor Recruitment Issues ---"
create_issue "Draft contributor role descriptions" "Define roles such as designer, PM, backend dev, etc." "Contributor Recruitment"
create_issue "Post openings on relevant platforms" "Publish contributor openings on GitHub, LinkedIn, Discord." "Contributor Recruitment"
create_issue "Set up onboarding process for new contributors" "Create guide and checklist for new team members." "Contributor Recruitment"
create_issue "Create contributor guide" "Document standards, branching model, communication rules." "Contributor Recruitment"
create_issue "Establish regular team meetings" "Schedule weekly sync calls for contributors." "Contributor Recruitment"

echo -e "\n--- Creating Marketing Initiatives Issues ---"
create_issue "Develop a content calendar" "Plan weekly posts, newsletter and LinkedIn updates." "Marketing Initiatives"
create_issue "Create promotional materials" "Design banners, visuals and copy for social and email." "Marketing Initiatives"
create_issue "Launch targeted ad campaigns" "Setup ads via Meta, Google or alternative platforms." "Marketing Initiatives"
create_issue "Engage with online communities" "Be active on Reddit, IndieHackers, forums etc." "Marketing Initiatives"
create_issue "Collect and showcase client testimonials" "Add social proof to site and promo content." "Marketing Initiatives"

echo -e "\n--- Creating Client Engagement Issues ---"
create_issue "Design a client intake form" "Create form to capture project briefs, goals, timeline." "Client Engagement"
create_issue "Set up CRM system" "Track leads and clients using Notion, Airtable or similar." "Client Engagement"
create_issue "Develop a pricing model" "Define hourly, fixed and package-based pricing tiers." "Client Engagement"
create_issue "Create service packages" "Bundle services for e.g. coaches, local shops, etc." "Client Engagement"
create_issue "Implement feedback loop" "Survey clients post-project and improve process." "Client Engagement"

echo -e "\n--- Creating Operational Processes Issues ---"
create_issue "Define standard operating procedures" "Write SOPs for project intake, dev, delivery, QA." "Operational Processes"
create_issue "Set up project management tools" "Configure Notion, Trello or Linear with shared boards." "Operational Processes"
create_issue "Establish internal communication channels" "Use Slack/Discord with role-based access." "Operational Processes"
create_issue "Develop documentation for recurring tasks" "Create checklists for launch, testing, billing etc." "Operational Processes"
create_issue "Monitor project timelines" "Ensure estimates are met with regular check-ins." "Operational Processes"

echo -e "\n--- Creating Financial Management Issues ---"
create_issue "Set up accounting software" "Use Bonsai, LexOffice or free tools for invoices." "Financial Management"
create_issue "Create a budget" "Estimate cost for dev, marketing, tools, hosting." "Financial Management"
create_issue "Determine pricing strategies" "Balance value with client expectations." "Financial Management"
create_issue "Explore funding opportunities" "Look into grants, accelerators, angel investors." "Financial Management"
create_issue "Plan for scalability" "Design systems and hiring to support growth." "Financial Management"

echo -e "\n--- Creating Community Building Issues ---"
create_issue "Launch a newsletter" "Collect emails and send regular updates." "Community Building"
create_issue "Host webinars or workshops" "Share knowledge on independent tools and practices." "Community Building"
create_issue "Engage with followers through Q&A" "Use Instagram stories or YouTube livestreams." "Community Building"
create_issue "Collaborate with like-minded orgs" "Reach out to NGOs, tech collectives, alt-agencies." "Community Building"
create_issue "Encourage user-generated content" "Start community challenges or feature users." "Community Building"

echo -e "\n--- Creating Continuous Improvement Issues ---"
create_issue "Review analytics regularly" "Track conversions, bounce rate and page views." "Continuous Improvement"
create_issue "Solicit feedback from clients and contributors" "Use forms and 1:1 convos to learn." "Continuous Improvement"
create_issue "Stay updated on industry trends" "Follow AI, CMS, dev and design news." "Continuous Improvement"
create_issue "Invest in team training" "Encourage online courses and peer learning." "Continuous Improvement"
create_issue "Refine marketing strategies" "Double down on channels that convert." "Continuous Improvement"

echo -e "\n--- Creating Legal and Compliance Issues ---"
create_issue "Ensure compliance with regulations" "Check GDPR, cookie, terms and billing standards." "Legal and Compliance"
create_issue "Draft terms of service and privacy policies" "Create pages with clear readable language." "Legal and Compliance"
create_issue "Secure licenses or certifications" "For software, font usage, tax status etc." "Legal and Compliance"
create_issue "Implement data protection measures" "Use encrypted backups and data minimization." "Legal and Compliance"
create_issue "Review legal docs regularly" "Schedule quarterly compliance audits." "Legal and Compliance"

echo -e "\nAll issues created successfully!" 