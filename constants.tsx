
import React from 'react';
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nexus Cloud Engine',
    description: 'A distributed computing platform built with Go and Rust, optimized for high-throughput data processing.',
    tags: ['Go', 'Rust', 'Kubernetes', 'gRPC'],
    link: '#',
    image: 'https://picsum.photos/seed/nexus/800/600'
  },
  {
    id: '2',
    title: 'Aura UI Framework',
    description: 'Next-gen design system for reactive web interfaces with built-in accessibility and performance optimization.',
    tags: ['TypeScript', 'React', 'Tailwind', 'A11y'],
    link: '#',
    image: 'https://picsum.photos/seed/aura/800/600'
  },
  {
    id: '3',
    title: 'Visionary AI',
    description: 'Computer vision pipeline for real-time object detection in industrial manufacturing environments.',
    tags: ['Python', 'PyTorch', 'C++', 'TensorRT'],
    link: '#',
    image: 'https://picsum.photos/seed/vision/800/600'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React', value: 95, category: 'frontend' },
  { name: 'TypeScript', value: 90, category: 'frontend' },
  { name: 'Node.js', value: 85, category: 'backend' },
  { name: 'Go', value: 80, category: 'backend' },
  { name: 'PostgreSQL', value: 85, category: 'backend' },
  { name: 'Docker', value: 88, category: 'devops' },
  { name: 'AWS', value: 82, category: 'devops' },
  { name: 'Generative AI', value: 75, category: 'ai' },
];

export const PERSONAL_CONTEXT = `
Name: Ritabrata Patra
Role: Senior Software Engineer
Location: San Francisco / Remote
Experience: 7+ years in full-stack development and distributed systems.
Key Skills: React, TypeScript, Node.js, Go, Kubernetes, Cloud Infrastructure, Generative AI.
Philosophy: Building elegant, scalable solutions to complex human problems.
Interests: Open source, architectural design, ethical AI, and rock climbing.
Recent Achievement: Led the migration of a monolithic microservices architecture to a serverless edge-first platform.
`;
