# Kaiju Agents Behavior

**Integration for [Kaiju Agents](https://agents.kaijusolutions.ca "Kaiju Agents") with [Unity Behavior](https://docs.unity3d.com/Packages/com.unity.behavior@latest "Unity Behavior").**

[![Kaiju Agents Behavior](https://behavior.kaijusolutions.ca/img/box-destroyer.png)](https://behavior.kaijusolutions.ca/#samples-and-exercises "Samples and Exercises")

This extension provides to nodes for accessing the [movement](https://agents.kaijusolutions.ca/manual/movement.html "Movement"), [sensors](https://agents.kaijusolutions.ca/manual/sensors.html "Sensors"), and [actuators](https://agents.kaijusolutions.ca/manual/actuators.html "Actuators") of [Kaiju Agents](https://agents.kaijusolutions.ca "Kaiju Agents") in graphs created with [Unity Behavior](https://docs.unity3d.com/Packages/com.unity.behavior@latest "Unity Behavior").

## Installation

1. [Install Kaiju Agents](https://agents.kaijusolutions.ca/#installation "Kaiju Agents Installation Instructions").
2. In your Unity project, from the top menu, go to `Window > Package Management > Package Manager` and click the `+` icon in the top left followed by `Install package from git URL...`.
5. Paste in one of the below options:

#### Latest Release - Recommended

```text
https://github.com/Kaiju-Solutions/Kaiju-Agents-Behavior.git#release
```

#### Specific Release

Replace the `#release` in the latest release installation with the version number of the given [release](https://github.com/Kaiju-Solutions/Kaiju-Agents-Behavior/releases "Kaiju Agents Behavior Releases").

#### Development

This will pull directly from the main branch, and is not recommended unless there is a specific feature needed not yet in the latest release.

```text
https://github.com/Kaiju-Solutions/Kaiju-Agents-Behavior.git?path=/Packages/com.kaijusolutions.agents.behavior
```

#### Updating

- **You should first [update Kaiju Agents](https://agents.kaijusolutions.ca#updating "Kaiju Agents Updating").**
- **Important:** Kaiju Agents Behavior and any other Git-installed packages in your Unity project will not appear as needing updates under the `Updates` tab, and hence why you need to manually choose to update.
- **Recommended:** Delete all existing [samples and exercises](https://agents.kaijusolutions.ca/manual/samples-and-exercises.html "Samples and Exercises") from your project's `Assets` folder.
- In Unity, from the top menu, go to `Window > Package Management > Package Manager` and select `In Project`.
- Select `Kaiju Agents Behavior` and click the `Manage` button followed by `Update`.

## Samples and Exercises

Nodes have been created for the ["Microbes"](https://agents.kaijusolutions.ca/manual/microbes.html "Microbes") and ["Capture the Flag"](https://agents.kaijusolutions.ca/manual/capture-the-flag.html "Capture the Flag") exercises of [Kaiju Agents](https://agents.kaijusolutions.ca "Kaiju Agents"). Additionally, a sample graph for [Unity Behavior](https://docs.unity3d.com/Packages/com.unity.behavior@latest "Unity Behavior") has been created for the ["Box Destroyer" sample](https://agents.kaijusolutions.ca/manual/samples-and-exercises.html#box-destroyer "Box Destroyer"). To get started with this:

1. Import the ["Box Destroyer" sample](https://agents.kaijusolutions.ca/manual/samples-and-exercises.html#box-destroyer "Box Destroyer") from [Kaiju Agents](https://agents.kaijusolutions.ca "Kaiju Agents").
2. Import the "Box Destroyer" sample of "Kaiju Agents Behaviour".
3. Find the imported core  [Kaiju Agents](https://agents.kaijusolutions.ca "Kaiju Agents") assets of the ["Box Destroyer" sample](https://agents.kaijusolutions.ca/manual/samples-and-exercises.html#box-destroyer "Box Destroyer").
4. Select the "Box Destroyer Configuration" and uncheck the "Clear" field.
5. Open the "Box Destroyer" scene and select the "Agent". Remove its "BoxDestroyerController" component. Add a "Behavior Graph" component and assign the imported "Box Destroyer" graph asset to the "Behavior Graph" field.