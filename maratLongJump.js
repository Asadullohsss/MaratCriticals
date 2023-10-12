Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
}
var C04PacketPlayerPosition = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition")
/// api_version=2
var script = registerScript({
    name: "maratLongJump",
    version: "1.0.1",
    authors: ["Asadullohsss"]
});

script.registerModule({
    name: "maratlongJump",
    category: "Movement",
    description: "Minelegacy dmg longjump by Asadullohsss"
}, function (module) {
    module.on("update", function() {
        yaw = Math.radians(mc.thePlayer.rotationYaw);
        mc.thePlayer.motionX = 3.20 * -Math.sin(yaw);
        mc.thePlayer.motionZ = 3.20 * Math.cos(yaw);
        mc.thePlayer.motionY = 0.42;
    });
});
