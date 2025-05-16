#!/bin/bash

REPO="densenden/forkit"
TOKEN=$(gh auth token)

echo "Checking and creating milestones for $REPO..."

# Function to check if milestone exists and create if not
create_milestone() {
  local title="$1"
  local description="$2"
  
  echo -e "\nChecking: $title"
  
  # Check if milestone exists
  existing=$(curl -s -H "Authorization: token $TOKEN" \
    -H "Accept: application/vnd.github.v3+json" \
    "https://api.github.com/repos/$REPO/milestones" | grep -c "\"title\": \"$title\"")
  
  if [ "$existing" -gt 0 ]; then
    echo "✓ Milestone '$title' already exists."
  else
    echo "Creating milestone: $title"
    curl -s -X POST \
      -H "Authorization: token $TOKEN" \
      -H "Accept: application/vnd.github.v3+json" \
      https://api.github.com/repos/$REPO/milestones \
      -d "{
        \"title\": \"$title\",
        \"description\": \"$description\",
        \"state\": \"open\",
        \"due_on\": \"2025-06-30T23:59:59Z\"
      }"
    echo -e "\n✅ Milestone created successfully!"
  fi
}

# Create all milestones
create_milestone "Website Enhancements" "Tasks to improve website design, UX, and technical SEO."
create_milestone "Demonstration Projects" "Build demo websites showcasing platform use cases."
create_milestone "Contributor Recruitment" "Onboarding developers, designers, and managers."
create_milestone "Marketing Initiatives" "Campaigns to grow visibility and attract clients."
create_milestone "Client Engagement" "Processes for onboarding, communication, and feedback."
create_milestone "Operational Processes" "Internal workflows, tools, and documentation."
create_milestone "Financial Management" "Revenue, costs, pricing and budgeting strategies."
create_milestone "Community Building" "Grow a network around shared digital independence."
create_milestone "Continuous Improvement" "Feedback-driven updates to product and process."
create_milestone "Legal and Compliance" "Ensure GDPR, terms, licensing and safe data handling."

echo -e "\nAll milestones checked/created successfully!" 