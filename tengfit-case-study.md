# Case Study: Tengfit ICT Project

## Project Overview
**Client**: Tengfit (A Global Internet Giant)
**Headquarters**: China (Global), Singapore (APAC)
**Location**: Singapore APAC Regional Headquarters
**Project Type**: Comprehensive ICT Infrastructure & Smart Office Solution
**Role**: Lead ICT Consultant & Solution Architect

## Executive Summary
Tengfit, a leading global internet technology company with its headquarters in China, established its Asia-Pacific (APAC) regional headquarters in Singapore to drive its international expansion. The "Tengfit ICT Project" was initiated to design and deploy a state-of-the-art, future-proof ICT infrastructure that mirrors the high standards of their global HQ while adapting to the specific connectivity and operational needs of the Southeast Asian market.

Our firm was selected as the primary ICT consultant to oversee the end-to-end solution design, vendor management, and technical delivery assurance. The project scope covered 5 floors of premium office space, accommodating over 500 employees, with a focus on high-availability networking, seamless cross-border connectivity, and an AI-enabled smart workplace experience.

## Challenges
1.  **Cross-Border Connectivity**: Ensuring low-latency, stable, and secure data transmission between the Singapore APAC HQ and the Global HQ in China, navigating complex cross-border data regulations.
2.  **High-Density Wireless Environment**: Supporting a "mobile-first" workforce with over 1500 concurrent devices (laptops, smartphones, IoT sensors) in an open-plan office without signal interference or bottlenecks.
3.  **Zero-Trust Security**: Implementing a rigorous security posture that protects intellectual property without hindering user productivity or collaboration.
4.  **Smart Office Integration**: Creating a frictionless meeting and workspace experience that integrates disparate systems (room booking, VC, access control, environmental controls) into a unified platform.

## Solution Architecture

### 1. Network Infrastructure (The Digital Backbone)
*   **Core Networking**: Deployed a fully redundant 100GbE core network architecture using **Cisco Nexus 9000 Series** switches to ensure non-blocking performance for internal data traffic.
*   **SD-WAN Implementation**: Designed a robust SD-WAN solution utilizing **Silver Peak (Aruba) EdgeConnect** to create an intelligent overlay network. This allows for dynamic path selection between MPLS, dedicated internet access (DIA), and broadband, optimizing traffic for critical business applications (e.g., ERP, internal dev tools) between Singapore and China.
*   **Wi-Fi 6E Deployment**: Implemented a high-density wireless network using **Aruba 650 series Access Points** with tri-band support (2.4GHz, 5GHz, 6GHz).
    *   *Design Highlight*: Conducted predictive heatmapping to ensure -65dBm coverage everywhere. Utilized OFDMA and MU-MIMO technologies to handle high client density in townhall areas.

### 2. Cross-Border Connectivity & Acceleration
*   **IEPL (International Ethernet Private Line)**: Provisioned dual-diverse IEPL circuits (1Gbps each) connecting Singapore Equinix SG1 DC to Beijing and Shenzhen data centers, ensuring <80ms latency for core replication.
*   **China Premium Internet**: Integrated China Telecom's CN2 (China Next Generation Carrying Network) DIA for optimized public internet routing to mainland China users and services.

### 3. Unified Communication & Smart Office
*   **Zoom Rooms Integration**: Equipped 30+ meeting rooms with **Neat Bar Pro** and **DTEN D7** all-in-one interactive displays. Features include:
    *   *Intelligent Director*: AI-driven multi-camera switching to frame active speakers.
    *   *Wireless Sharing*: One-click sharing via ultrasonic proximity detection.
*   **Space Management System**: Deployed a custom-integrated IoT platform using **Crestron** control systems linked to **Microsoft Exchange**.
    *   *Sensors*: Occupancy sensors automatically release "ghost meetings" (booked but unoccupied rooms) after 15 minutes.
    *   *Wayfinding*: Interactive kiosks and digital signage at lift lobbies showing real-time floor plans and room availability.

### 4. Cybersecurity (Zero Trust Framework)
*   **NAC (Network Access Control)**: Utilized **Cisco ISE (Identity Services Engine)** for granular profiling and policy enforcement. IoT devices (printers, smart screens) are dynamically segmented into isolated VLANs.
*   **NGFW (Next-Gen Firewalls)**: Deployed **Palo Alto Networks PA-3400 Series** in HA pair, enabling deep packet inspection, App-ID, and threat prevention for all perimeter traffic.
*   **Endpoint Protection**: Standardized on **CrowdStrike Falcon** for all corporate endpoints, integrated with the SIEM for real-time threat hunting.

## Key Outcomes
*   **99.999% Network Uptime**: Achieved carrier-grade reliability for the first 12 months of operation.
*   **30% Improvement in Cross-Border Throughput**: SD-WAN optimization reduced packet loss and jitter for video conferencing and file transfers to China.
*   **Seamless User Experience**: Employee satisfaction score for IT services reached 4.8/5.0, with specific praise for the "invisible" Wi-Fi and easy-to-use meeting rooms.
*   **Future-Ready**: The infrastructure supports a 50% growth in headcount and bandwidth demand without requiring hardware upgrades.

## Technical Specifications Summary
| Domain | Technology Stack | Key Metrics |
| :--- | :--- | :--- |
| **LAN/Core** | Cisco Catalyst 9000, Nexus 9000 | 100GbE Core, 10GbE Access |
| **Wireless** | Aruba Wi-Fi 6E, AirWave | <3ms Latency, 200+ Devices/AP |
| **WAN** | Silver Peak SD-WAN, Singtel IEPL | 2Gbps Aggregated Bandwidth |
| **Security** | Palo Alto NGFW, Cisco ISE | Zero Trust, Micro-segmentation |
| **AV/VC** | Zoom Rooms, Neat, Shure Audio | 4K Video, Dante Audio over IP |
