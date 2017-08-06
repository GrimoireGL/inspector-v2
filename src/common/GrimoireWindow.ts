import gr from "grimoirejs";
interface GrimoireWindow extends Window{
  GrimoireJS:typeof gr;
};

export default GrimoireWindow;
