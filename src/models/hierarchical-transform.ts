// import { mat4, quat, vec3 } from "gl-matrix";
// import { SimpleVector3, Vector3 } from "gtools/math";
// import { Quaternion } from "../math/quaternion";
// import { Transform } from "./transform";
//
// /**
//  * @see https://github.com/G43riko/JavaUtils/blob/master/GLib2/src/main/java/org/glib2/math/transforms/TransformHierarchy.java
//  * @see https://github.com/G43riko/JavaUtils/blob/master/GLib2/src/test/java/org/glib2/math/TransformHierarchyTest.java
//  */
// export class HierarchicalTransform extends Transform {
//     private _parent?: HierarchicalTransform;
//     private _parentTransformation = mat4.create();
//     private _oldPosition          = new Vector3();
//     private _oldRotation          = new Quaternion();
//     private _oldScale             = Vector3.ONE;
//
//     private hasChange(): boolean {
//         if (this._parent?.hasChange()) {
//             return true;
//         }
//
//         if (!Vector3.equals(this.position, this._oldPosition)) {
//             return true;
//         }
//
//         if (!quat.equals(this.rotation, this._oldRotation)) {
//             return true;
//         }
//
//         return !Vector3.equals(this.scale, this._oldScale);
//     }
//
//     public update(): void {
//         this._oldPosition.set(this.position);
//         quat.copy(this._oldRotation, this.rotation);
//         this._oldScale.set(this.scale);
//     }
//
//     public setParent(parent: HierarchicalTransform | Transform): void {
//         this._parent = parent as HierarchicalTransform;
//     }
//
//     public get transformation(): mat4 {
//         return mat4.mul(mat4.create(), this.parentMatrix(), super.transformation);
//     }
//
//     private parentMatrix(): mat4 {
//         if (this._parent?.hasChange()) {
//             this._parentTransformation = mat4.copy(this._parentTransformation, this._parent?.transformation);
//         }
//
//         return this._parentTransformation;
//     }
//
//     public get transformedPos(): SimpleVector3 {
//         const result = vec3.transformMat4([0, 0, 0], [
//             this.position.x,
//             this.position.y,
//             this.position.z
//         ], this.parentMatrix());
//
//         return {
//             x: result[0],
//             y: result[1],
//             z: result[2]
//         };
//     }
//
//     public get transformedRot(): quat {
//         if (!this._parent) {
//             return this.rotation;
//         }
//
//         return quat.mul([0, 0, 0, 0], this._parent.transformedRot, this.rotation);
//     }
// }
