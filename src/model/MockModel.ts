import type { Land } from "./Land";
import type { Model } from "./Model";
import type { Agent } from "./Agent";
import { mockLands } from "./MockData";

class MockModel implements Model {
  private lands: Land[] = [];
  private promiseReady: Promise<void>;

  constructor() {
    // Load mock data
    this.promiseReady = this.loadMockData();
  }

  private async loadMockData(): Promise<void> {
    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Load mock lands
    this.lands = [...mockLands];
    console.log(`Loaded ${this.lands.length} mock properties`);
  }

  async ready(): Promise<void> {
    await this.promiseReady;
  }

  async getAllLands(): Promise<Land[]> {
    await this.ready();
    return [...this.lands];
  }

  async getPromotedLands(): Promise<Land[]> {
    await this.ready();
    return this.lands.filter(land => land.promoted);
  }

  async getLandBySlug(slug: string): Promise<Land> {
    await this.ready();
    const land = this.lands.find(land => land.slug === slug);
    if (!land) {
      throw new Error(`Land with slug "${slug}" not found`);
    }
    return land;
  }

  async getLandsBySlugs(slugs: string[]): Promise<Land[]> {
    await this.ready();
    return this.lands.filter(land => slugs.includes(land.slug));
  }

  async getAllAgents(): Promise<Agent[]> {
    await this.ready();
    // Return empty array for now since we don't have mock agents
    return [];
  }
}

// Create and export the mock model instance
const applicationDataModel = new MockModel();
export default applicationDataModel;
